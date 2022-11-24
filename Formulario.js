
function ProductCard({productos}) {

    const handleError = ({ currentTarget }) => {
        currentTarget.onerror = null; // prevents looping
        currentTarget.src="alternative.png";
    }
  return (
    <div className="card" style={{width: "18rem"}}>
      <img src={productos.image_link} alt="Image not found" onError={handleError} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{productos.name}</h5>
        <p className="card-text">
          {productos.description}
        </p>
        <a href="#" className="btn btn-primary">
          See More
        </a>
      </div>
    </div>
  );
} 

 export default ProductCard;





