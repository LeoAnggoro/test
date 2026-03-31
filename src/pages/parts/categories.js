import React from 'react';
import { motion } from 'framer-motion';
import Button from 'elements/Button';

export default function Categories({ data }) {
  // Kita melakukan mapping terhadap data categories
  return data.map((category, index) => {
    return (
      <section className="container" key={`category-${index}`}>
        {/* Animasi Judul Kategori */}
        <motion.h4 
          className="mb-3 font-weight-medium"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {category.name}
        </motion.h4>

        <div className="container-grid">
          {category.items.length === 0 ? (
            <div className="row">
              <div className="col-auto align-items-center">
                There is no property at this category
              </div>
            </div>
          ) : (
            category.items.map((item, index2) => {
              return (
                <motion.div
                  className="item column-3 row-1"
                  key={`category-${index}-item-${index2}`}
                  // Efek Fading bertahap (Staggered)
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index2 * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="card">
                    {item.isPopular && (
                      <div className="tag">
                        Popular <span className="font-weight-light">Choice</span>
                      </div>
                    )}
                    <figure className="img-wrapper" style={{ height: 180 }}>
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="img-cover"
                      />
                    </figure>
                    <div className="meta-wrapper">
                      <Button
                        type="link"
                        href={`/properties/${item._id}`}
                        className="stretched-link d-block text-gray-800"
                      >
                        <h5 className="h4">{item.name}</h5>
                      </Button>
                      <span className="text-gray-500">
                        {item.city}, {item.country}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })
          )}
        </div>
      </section>
    );
  });
}