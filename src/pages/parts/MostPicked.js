import React from 'react';
import Button from 'elements/Button';
import { motion } from 'framer-motion'; // Tambahkan import ini

export default function MostPicked(props) {
  return (
    <section className="container" ref={props.refMostPicked}>
      <h4 className="mb-3">Most Picked</h4>
      <div className="container-grid">
        {props.data.map((item, index) => {
          return (
            /* Tambahkan motion.div di sini untuk efek fading */
            <motion.div
              key={`mostpicked-${index}`}
              className={`item column-4 ${index === 0 ? "row2" : "row1"}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="card card-featured">
                <div className="tag">
                    ${item.price}
                    <span className="font-weight-light">per{item.unit}</span>
                </div>
                <figure className="img-wrapper">
                    <img src={item.imageUrl}
                    alt={item.name}
                    className="img cover" />
                </figure>
                <div className="meta-wrapper">
                    <Button type="link" className="stretched-link d-block text-white"
                     href={`/properties/${item._id}`}>
                        <h5>{item.name}</h5>
                    </Button>
                    <span>
                        {item.city},{item.country}
                    </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}