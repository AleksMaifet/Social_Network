export const createPages = (pages:Array<number>, pagesCount:number, currentPage:number) => {
	if(pagesCount > 10) {
		if(currentPage >= 10) {
			for (let i = currentPage-9; i <= currentPage+10; i++) {
				pages.push(i)
				if(i === pagesCount) break
			}
		}
		else {
			for (let i = 1; i <= 10; i++) {
				pages.push(i)
				if(i === pagesCount) break
			}
		}
	}  else {
		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i)
		}
	}
	return pages
}