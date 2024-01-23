
import imgOne from './pics/blog-image-1.jpg';

// import imgTwo from './pics/blog-image-2.jpg';

function Article() {
    return(
            <article>
            <time dateTime="2020-12-11">11/12/20</time>
            <h2 className = "blog-post-title">On the Street in Brooklyn</h2>
            <img src={imgOne} alt="..." />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Velit aliquid architecto error neque porro quisquam, quas
                temporibus sint in nihil rem quibusdam cum necessitatibus
                nisi voluptatem dolorem quam voluptate debitis?
            </p>
            <div id="continuesLink">
              <a href= "...">Continues...</a>
            </div>
        </article>
    )
}

export default Article