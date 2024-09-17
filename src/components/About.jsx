import ToTopButton from "./ToTopButton";

export default function About() {
    return(
        <div className="content">
            <p className="headingLarge italic">ABOUT ME</p>
            <p className="heading">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                 praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi 
                 sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt 
                 mollitia animi, id est laborum et dolorum fuga.</p>
            <ToTopButton/>
        </div>
    );
}