import React from 'react'
import Button from 'elements/Button'
import IconText from 'pages/parts/iconText'

export default function Footer() {
  return (
    <footer className="spacing-sm">
      <div className="container">
        <div className="row" style={{ borderTop: "1px solid #F0F1F2", paddingTop: 50 }}>
          
          {/* Bagian Logo & Tagline */}
          <div className="col-3">
            <IconText />
            <p className="brand-tagline text-gray-500">
              We kaboom your beauty holiday instantly and memorable.
            </p>
          </div>

          {/* Bagian Kategori yang dibuat RATA (Justified) */}
          <div className="col-9">
            <div className="row justify-content-end">
              
              {/* Kolom 1: For Beginners */}
              <div className="col-3">
                <h6 className="mt-2 text-dark font-weight-bold">For Beginners</h6>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <Button type="link" href="/register">New Account</Button>
                  </li>
                  <li className="list-group-item">
                    <Button type="link" href="/properties">Start Booking</Button>
                  </li>
                  <li className="list-group-item">
                    <Button type="link" href="/use-payments">Use Payments</Button>
                  </li>
                </ul>
              </div>

              {/* Kolom 2: Explore Us */}
              <div className="col-3">
                <h6 className="mt-2 text-dark font-weight-bold">Explore Us</h6>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <Button type="link" href="/careers">Our Careers</Button>
                  </li>
                  <li className="list-group-item">
                    <Button type="link" href="/privacy">Privacy</Button>
                  </li>
                  <li className="list-group-item">
                    <Button type="link" href="/terms">Terms & Conditions</Button>
                  </li>
                </ul>
              </div>

              {/* Kolom 3: Connect Us */}
              <div className="col-3">
                <h6 className="mt-2 text-dark font-weight-bold">Connect Us</h6>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <Button isExternal type="link" href="mailto:support@staycation.id">support@staycation.id</Button>
                  </li>
                  <li className="list-group-item">
                    <Button isExternal type="link" href="tel:+622122081996">021 - 2208 - 1996</Button>
                  </li>
                  <li className="list-group-item">
                    <span>Staycation, Kemang, Jakarta</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>

        <div className="row">
          <div className="col text-center copyrights">
            Copyright 2026 • All rights reserved • Staycation
          </div>
        </div>
      </div>
    </footer>
  )
}