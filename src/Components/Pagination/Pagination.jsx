import ReactPaginate from 'react-paginate'
import Image from '@auction/Components/Image'

import BackPage from '@auction/assets/images/svg/back-page.svg'
import NextPage from '@auction/assets/images/svg/next-page.svg'

import '@auction/Components/Pagination/Pagination.scss'

function Paginations({ totalPageCount, forcePage, handlePageClick }) {
  return (
    <div className="d-flex align-items-center flex-column flex-lg-row justify-content-center w-100">
      <ReactPaginate
        breakLabel="..."
        nextLabel={<Image src={NextPage} />}
        pageCount={totalPageCount}
        previousLabel={<Image src={BackPage} />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        marginPagesDisplayed={2}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        containerClassName="pagination"
        activeClassName="active"
        forcePage={forcePage}
      />
    </div>
  )
}

export default Paginations
