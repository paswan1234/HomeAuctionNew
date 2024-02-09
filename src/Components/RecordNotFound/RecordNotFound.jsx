import Image from '@auction/Components/Image'

import Games from '@auction/assets/images/games.svg'

function RecordNotFound() {
  return (
    <div className="d-flex pt-5 pb-5 flex-column align-items-center justify-content-center">
      <Image src={Games} name="Games" className="img-fluid mb-4" />
      <span>Record Not Found</span>
    </div>
  )
}
export default RecordNotFound
