export default function Footer({socials}) {
    return (
        <footer>
            {socials.map(({id, link, icon}) => (
                <a className="footerElement" key={id} href={link} target="_blank">{icon}</a>
            ))}
            <p>&copy; {new Date().getFullYear()} Zain Gova. All Rights Reserved.</p>
        </footer>
    )
}