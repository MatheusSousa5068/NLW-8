import React, { useState } from "react";
import CloseButton from "../CloseButton";

import bugImageURL from "../../assets/bug.svg";
import ideaImageURL from "../../assets/idea.svg";
import thoughtImageURL from "../../assets/thought.svg";
import FeedbackTypeStep from "./Steps/FeedbackTypeStep";
import FeedbackContentStep from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
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

export type FeedBackType = keyof typeof feedbackTypes;

function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedBackType | null>(null);

    const classStyles =
        "bg-zinc-900 p-4 relative rounded-2xl mb-4 flex-col text-center items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto";

    return (
        <div className={classStyles}>
            

            {!feedbackType ? (
                <FeedbackTypeStep onFeedBackTypeChanged={setFeedbackType} />
            ) : (
                <FeedbackContentStep />
            )}

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
