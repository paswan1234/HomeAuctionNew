import './Loader.scss'

function LoaderComponent({ className, color }) {
  return (
    <div className={`loader' ${className}`}>
      <div className="loader-inner">
        <div
          className={`spinner-border text-${color || 'col6'}`}
          role="status"
        />
      </div>
    </div>
  )
}
export default LoaderComponent
