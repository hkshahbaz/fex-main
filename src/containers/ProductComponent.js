import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    console.log(products)
    const renderList = products.map((product) => {
        const {id, title, image, price, category} = product;
        return (
            <div className="four wide column" key={id}>
                <Link to={"product/"+id}>
                    <div className="ui link cards">
                        <div className="card ui segment">
                            <div className="image">
                                <img src={image} alt={title} height={300} width={300} />
                            </div>
                            <div className="content">
                                <div className="header">{title}</div>
                                <div className="meta price">$ {price}</div>
                                <div className="meta">{category}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    });

    return(
        <> {renderList} </>
    )

    // return(<h1>TEST</h1>);
}

export default ProductComponent;