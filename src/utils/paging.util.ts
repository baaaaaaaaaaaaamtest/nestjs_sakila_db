
export const getPaging = (currentPage:number,totalItems:any) =>{
  const pageSize = 5; // 한 페이지당 데이터 개수
  const maxPageListCount = 5; // 보여줄 페이지 번호의 최대 개수

  // 페이지 번호가 없거나 1 미만일 경우 1로 초기화
  const current = currentPage && currentPage > 0 ? currentPage : 1;

  // 전체 페이지 수 계산 (올림)
  const totalPages = Math.ceil(totalItems / pageSize);

  // 페이지 리스트 계산
  // 시작 페이지 계산 (0부터 시작하므로 -1 후 maxPageListCount 단위 블럭 계산)
  const startPage = Math.floor((current - 1) / maxPageListCount) * maxPageListCount + 1;

  // 종료 페이지 계산 (startPage + maxPageListCount - 1), 총 페이지 수보다 크면 보정
  let endPage = startPage + maxPageListCount - 1;
  if (endPage > totalPages) {
    endPage = totalPages;
  }

  // 페이지 리스트 생성
  const pageList: number[] = [];
  for (let i = startPage; i <= endPage; i++) {
    pageList.push(i);
  }

  // 현재 페이지의 시작 아이템 인덱스 (0부터 시작)
  const startIndex = (current - 1) * pageSize;
  // 현재 페이지의 끝 아이템 인덱스, 총 아이템 개수를 초과하지 않게 보정
  const endIndex = Math.min(startIndex + pageSize , totalItems);

  return {
    currentPage: current,
    pageSize,
    totalItems,
    totalPages,
    startPage,
    endPage,
    pageList,
    startIndex,
    endIndex,
  };
}
