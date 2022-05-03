import React, { useState } from "react";
import CloseButton from "./CloseButton";

import bugImageURL from "../assets/bug.svg";
import ideaImageURL from "../assets/idea.svg";
import thoughtImageURL from "../assets/thought.svg";

const feedbackTypes = {
    BUG: {
        title: "Problema",
        image: {
            source: bugImageURL,
            alt: "Imagem de um inseto",
        },
    },
    IDEA: {
        title: "Ideia",
        image: {
            source: ideaImageURL,
            alt: "Imagem de uma lâmpada",
        },
    },
    OTHER: {
        title: "Outro",
        image: {
            source: thoughtImageURL,
            alt: "Imagem de nuvem de pensamento",
        },
    },
};

type FeedBackType =  keyof typeof feedbackTypes

function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedBackType | null>(null)


    const classStyles =
        "bg-zinc-900 p-4 relative rounded-2xl mb-4 flex-col text-center items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto";

    return (
        <div className={classStyles}>
            <header>
                <span className="text-xl leading-6 ">Deixe seu feedback</span>

                <CloseButton />
            </header>

           {!feedbackType ?  <div className="flex py-8 gap-2 w-full">
                {Object.entries(feedbackTypes).map(([key, value]) => {
                    return (
                        <button
                            key={key}
                            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                            onClick={() => setFeedbackType(key as FeedBackType)}
                            type="button"
                        >
                            <img
                                src={value.image.source}
                                alt={value.image.alt}
                            />
                            <span>{value.title}</span>
                        </button>
                    );
                })}
            </div> : (
                <p>Hello World</p>
            )
            
        }

            <footer className="text-xs text-neutral-400">
                Feito com ♥ pela Rocketseat &{" "}
                <a
                    className="underline underline-offset-2"
                    href="https://github.com/MatheusSousa5068"
                >
                    Matheus Sousa
                </a>
            </footer>
        </div>
    );
}

export default WidgetForm;
