import React from 'react'
import '../sass/components/footer.scss'

export default function Footer() {
    return (
        <div className="footer">
            <p>Copyright &copy; {new Date().getFullYear()} ZDPI. Vse pravice pridržane.</p>
        </div>
    )
}
