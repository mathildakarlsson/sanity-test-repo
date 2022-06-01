import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SanityClient } from '@sanity/client';

const Shop = () => {
    const [shopData, setShopData] = useState(null);

    useEffect(() => {
        SanityClient
            .fetch(`*[_type == 'shop]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`)
            .then((data) => setShopData(data))
            .catch(console.error);
    }, []);


    return (
        <main>
            <section>
                <h1>Shop page</h1>
                <h2>Welcome to the shop page!</h2>
                <div>
                    {shopData && shopData.map((shop, index) => {
                        <article>
                            <Link to={'/shop/' + shop.slug.current} key={shop.slug.current}>
                                <span key={index}>
                                    <img 
                                        src={shop.mainImage.asset.url}
                                        alt={shop.mainImage.alt}
                                    />
                                    <span>
                                        <h3>{shop.title}</h3>
                                    </span>
                                </span>
                            </Link>
                        </article>
                    })}
                </div>
            </section>

        </main>
    )
};

export default Shop;
