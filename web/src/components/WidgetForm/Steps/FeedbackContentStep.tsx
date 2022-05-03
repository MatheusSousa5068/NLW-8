import React from "react";
import { FeedBackType, feedbackTypes } from "..";
import CloseButton from "../../CloseButton";
import { ArrowLeft } from "phosphor-react";

interface FeedBackContentStepProps {
    feedbackType: FeedBackType;
    onFeedbackRestartRequested: () => void;
}

function FeedbackContentStep({
    feedbackType,
    onFeedbackRestartRequested,
}: FeedBackContentStepProps) {
    const feedbackTypeInfo = feedbackTypes[feedbackType];

    return (
        <>
            <header>
                <button
                    type="button"
                    onClick={onFeedbackRestartRequested}
                    className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
                >
                    <ArrowLeft weight="bold" className="w-4 h-4" />
                </button>

                <span className="text-xl leading-6 flex justify-center gap-2">
                    <img
                        src={feedbackTypeInfo.image.source}
                        className="w-6 h-6 justify-center"
                        alt={feedbackTypeInfo.image.alt}
                    />{" "}
                    {feedbackTypeInfo.title}
                </span>

                <CloseButton />
            </header>

            <form action="" className="my-4 w-full">
                <textarea className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent" placeholder="Conte com detalhes o que está acontecendo..." />
                
            </form>
        </>
    );
}

export default FeedbackContentStep;
