"""Check PDF text tagging and its connection to the reading structure (requires pypdf)."""
from collections import Counter
from pypdf import PdfReader
from pypdf.generic import ContentStream

reader = PdfReader('assets/documents/yunya-lin-cv.pdf')
root = reader.trailer['/Root']
assert root['/MarkInfo']['/Marked'] and root['/Lang']
assert len(reader.pages) == 2
owners, headings, actual = {}, [], []

def walk(ref, page=None):
    if isinstance(ref, list):
        for child in ref:
            walk(child, page)
    elif hasattr(ref, 'get_object'):
        obj = ref.get_object()
        if not isinstance(obj, dict):
            return
        page = obj.get('/Pg', page)
        if obj.get('/S') in ['/H1', '/H2', '/H3']:
            headings.append(int(obj['/S'][-1]))
        if '/ActualText' in obj:
            actual.append(str(obj['/ActualText']))
        kids = obj.get('/K', [])
        for child in kids if isinstance(kids, list) else [kids]:
            if isinstance(child, int):
                key = (page.idnum, int(child))
                assert key not in owners, f'Duplicate structure reference: {key}'
                owners[key] = ref
            else:
                walk(child, page)

walk(root['/StructTreeRoot']['/K'])
assert headings.count(1) == 1 and headings[0] == 1
assert all(b <= a + 1 for a, b in zip(headings, headings[1:]))
nums = root['/StructTreeRoot']['/ParentTree']['/Nums']
parents = {int(nums[i]): nums[i+1].get_object() for i in range(0, len(nums), 2)}
for page in reader.pages:
    stack, used = [], Counter()
    parent = parents[int(page['/StructParents'])]
    for args, op in ContentStream(page['/Contents'], reader).operations:
        if op in [b'BDC', b'BMC']:
            marker = int(args[1]['/MCID']) if op == b'BDC' and '/MCID' in args[1] else 'artifact'
            stack.append(marker)
            if isinstance(marker, int):
                key = (page.indirect_reference.idnum, marker)
                assert key in owners
                assert parent[marker] == owners[key]
                used[marker] += 1
        elif op == b'EMC':
            assert stack
            stack.pop()
        elif op in [b'Tj', b'TJ', b"'", b'"']:
            assert stack, 'Text outside a tag or artifact'
    assert not stack
    assert all(count == 1 for count in used.values()), 'Repeated marked-content IDs'
    assert set(used) == {mcid for pg, mcid in owners if pg == page.indirect_reference.idnum}
for phrase in ['November 2025 to May 2026', 'Compare AI-generated', 'Examine how the models', 'Project Lead', 'Progressed from Data Dive']:
    assert any(phrase in text for text in actual), phrase
print('PASS: two pages; heading hierarchy; every text run tagged or artifact; bidirectional parent-tree references; edited content connected.')
