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
            <div className="flex py-8 gap-2 w-full"></div>
        </>
    );
}

export default FeedbackContentStep;
