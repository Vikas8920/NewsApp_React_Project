import { Link } from "react-router-dom";

const NewsItem = ({title, description, src, url}) => {
  return (
    <div className="card d-inline-block bg-dark text-light ms-4 mb-4 pt-2 ps-2" style={{width: "300px"}}>
      <img src={src?src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaSfEGYpu8XV6q-JMyVkcAO7XXqrcG2vMtCg&usqp=CAU"} style={{height: "200px", width: "280px"}} className="card-img-top" alt="newsApp" />
      <div className="p-2 pb-3">
        <div style={{height: "55px"}}>
            <h5 className="">{title.slice(0,40)}...</h5>
        </div>
        <div className="mb-2" style={{height: "55px"}}>
            <p className="">{description?description.slice(0,60):"No additional information provided for this article"}...</p>
        </div>
        <Link to={url} target={"_blank"} className="btn btn-primary">Read more</Link>
      </div>
    </div>
  );
};

export default NewsItem;
