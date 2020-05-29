import React from 'react';
// @ts-ignore
import ShopMen from './../../assets/shopMens.jpg';
// @ts-ignore
import ShopWomen from './../../assets/shopWomens.jpg';
import './styles.scss';

const Directory = props => {
    return (
        <div className="directory">
            <div className="wrap">
                <div
                    className="item"
                    style={{
                        backgroundImage: `url(${ShopWomen})`
                    }}
                >
                    <a href='https://www.google.com/'>
                        Shop Womens
                    </a>
                </div>
                <div
                    className="item"
                    style={{
                        backgroundImage: `url(${ShopMen})`
                    }}
                >
                    <a href='https://www.google.com/'>
                        Shop Mens
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Directory;