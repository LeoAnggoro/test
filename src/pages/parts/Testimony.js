import React from 'react'
import { motion } from 'framer-motion'

import TestimonyAccent from "assets/images/testimonial-landingpages-frame.jpg";
import Star from 'elements/Star' 
import Button from 'elements/Button'

export default function Testimony({ data }) {
  if (!data) return null;

  return (
    <section className="container">
      <div className="row align-items-center">
        {/* Kolom Foto dengan Animasi Fading */}
        <div className="col-auto" style={{ marginRight: 60 }}>
          <motion.div 
            className="testimonial-hero" 
            style={{ margin: `30px 0 0 30px` }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <img
              src={data.imageUrl}
              alt="Testimonial"
              className="position-absolute"
              style={{ zIndex: 1 }} 
            />
            <img
              src={TestimonyAccent}
              alt="Testimonial frame"
              className="position-absolute"
              style={{ margin: `30px 0 0 -30px` }}
            />
          </motion.div>
        </div>

        {/* Kolom Teks dengan Animasi Slide Up */}
        <motion.div 
          className="col"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h4 style={{ marginBottom: 40 }}>{data.name}</h4>
          
          <Star value={data.rate} width={35} height={35} spacing={4} />
          
          <h5 className="h2 line-height-2 my-3">
            {data.content}
          </h5>

          <span className="text-gray-500 d-block mb-5">
            {data.familyName}, {data.familyOccupation}
          </span>

          <div style={{ marginTop: 40 }}>
            <Button className="btn px-5" hasShadow isPrimary type="link" href={`/testimonial/${data._id}`}>
              Read Their Story
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}