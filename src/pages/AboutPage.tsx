import React from "react";
import { useNavigate } from "react-router-dom"

export const AboutPage: React.FC = () => {
    const navigate=useNavigate()
    return (
        <>
            <h1>Info page</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo iusto vero nostrum asperiores atque impedit fugiat quam, eius illo et quibusdam culpa eum quae. Ut aperiam temporibus architecto sint suscipit omnis consequuntur? Similique temporibus distinctio cupiditate, adipisci ipsum quas eveniet harum doloribus reiciendis doloremque amet blanditiis perspiciatis et, ea quis magni illum aliquid architecto debitis, qui facere minima animi unde. Neque iste necessitatibus at reiciendis voluptatibus ex vero blanditiis repellat nihil voluptatem ea aliquam atque exercitationem dolorem animi placeat modi dolorum, non cumque amet corporis deserunt aliquid adipisci vitae? Quo iusto provident laudantium quia ullam maiores deserunt odio hic ex reprehenderit nobis minima iure ad in consectetur inventore sunt voluptatibus pariatur quod, dicta suscipit? Ratione obcaecati omnis perspiciatis iure illo dolor voluptatibus fugit maxime reiciendis maiores accusantium similique, dolores rerum adipisci aperiam unde provident. Illo nisi sint accusamus nihil ducimus ad possimus, quas aliquam laborum alias dolore unde? Voluptatum ut quod, ad minima ea cumque quo illo consectetur quos officiis itaque facilis, a officia quidem maxime reiciendis, dolorem veniam dolorum recusandae impedit? Atque blanditiis vero dolore laudantium amet ut eveniet possimus itaque, quos aspernatur dolores numquam quia, minima veritatis excepturi nihil. Repudiandae vitae, deserunt ex totam iure, ducimus temporibus consequuntur, magnam error non ullam officia sunt debitis vel illo. Voluptates enim impedit qui voluptatibus temporibus! Numquam minus facilis perspiciatis eius tempora consequuntur dolorum cumque dolores, provident quis, itaque sint, vel libero unde incidunt neque magnam! Et, deleniti deserunt soluta sint dolores unde adipisci neque? Molestiae, necessitatibus nihil enim dolor ea aliquid minus vel. Dolore quasi fugit adipisci velit architecto illum sapiente veritatis beatae voluptatibus! Porro, eaque error ducimus laudantium soluta quas, esse animi quae nobis exercitationem ab ea! Reiciendis et, quia eos cumque tempora reprehenderit a. Reiciendis, numquam nulla iusto laboriosam inventore voluptatem quis, nam fuga porro ipsa eius quasi.</p>
            <button className="btn" onClick={()=>navigate("/")} >Back to homepage</button>
        </>
    )
    
}