import React from 'react';
import { FeedBackType, feedbackTypes } from '..';
import CloseButton from '../../CloseButton';

interface FeedBackContentStepProps {
    feedbackType: FeedBackType
}

function FeedbackContentStep({ feedbackType}: FeedBackContentStepProps) {
    const feedbackTypeInfo = feedbackTypes[feedbackType]

    return (
        <>
            <header>
                <span className="text-xl leading-6 flex justify-center gap-2"><img src={feedbackTypeInfo.image.source} className="w-6 h-6 justify-center" alt={feedbackTypeInfo.image.alt} /> {feedbackTypeInfo.title}</span>

                <CloseButton />
            </header>
            <div className="flex py-8 gap-2 w-full">
                
            </div>
        </>
    );
}

export default FeedbackContentStep;