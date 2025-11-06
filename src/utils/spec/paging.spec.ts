import { getPaging } from '../paging.util'; // getPaging 함수가 있는 파일을 정확히 지정
describe('getPaging 함수 테스트', () => {

  it('startIndex와 endIndex가 올바르게 계산돼야 한다', () => {
    const result = getPaging(1, 12);
    expect(result.startIndex).toBe(0);
    expect(result.endIndex).toBe(5);

    const result2 = getPaging(3, 12);
    expect(result2.startIndex).toBe(10);
    expect(result2.endIndex).toBe(12);

    const result3 = getPaging(5, 25); // 5페이지는 20~24 인덱스
    expect(result3.startIndex).toBe(20);
    expect(result3.endIndex).toBe(25);
  });

  it('pageList의 길이는 5 이하이며 올바른 startPage와 endPage', () => {
    const result = getPaging(7, 100);
    expect(result.pageList.length).toBeLessThanOrEqual(5);
    expect(result.startPage).toBe(6);
    expect(result.endPage).toBe(10);
  });

  it('currentPage가 없거나 0 이하면 1로 초기화', () => {
    expect(getPaging(0, 10).currentPage).toBe(1);
    expect(getPaging(1, 10).currentPage).toBe(1);
  });
})