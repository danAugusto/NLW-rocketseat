import { CloseButton } from "./CloseButton";

import bugImageUrl from '../Assets/bug.svg';
import ideiaImageUrl from '../Assets/ideia.svg';
import outrosImageUrl from '../Assets/outros.svg';


const feedbackTypes ={
    BUG:{
        title: 'Problema',
        image:{
            source: bugImageUrl,
            alt: 'imagem de um inseto'
        },
    },
    IDEA:{
        title:'Ideia',
        image:{
            source: ideiaImageUrl,
            alt: 'imagem de uma lâmpada'
        },
    },
    OTHER:{
        title:'Outro',
        image:{
            source: outrosImageUrl,
            alt: 'imagem de uma cabeça com engrenajem'
        },
    },
};

// Object.entries(feedbackTypes) => [ ['BUG',{...}], [], [] ]

export function WidgetForm(){
    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6">Deixe seu feedbacl</span>

                <CloseButton />
            </header>

            <div className="flex py-8 gap-2 w-full">
               { Object.entries(feedbackTypes).map(([key, value]) => {
                   return (
                       <button
                            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center gap-2 b"
                            type="button"
                       >
                            <img src={value.image.source} alt={value.image.alt} />
                            <span>{value.title}</span>
                       </button>
                   );
                
                })} 
            </div>

            <footer>
                feito com o ❤️ pelo <h1 className="underline underline-offset-2">danilo</h1>
            </footer>
        </div>
    );
}