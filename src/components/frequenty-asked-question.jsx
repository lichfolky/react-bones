import * as React from 'react';
import styled from 'styled-components/macro';

function FrequentlyAskedQuestion({
    question,
    answer,
}) {
    return (
        <Faq>
            <Question>{question}</Question>
            <Answer>
                {answer}
            </Answer>
        </Faq>
    );
}

const Faq = styled.details`
        font-size: 1rem;
        color: hsl(0deg 0% 25%);
        border: 2px solid;
        border-radius: 4px;
    `;

const Question = styled.summary`
        cursor: pointer;
        padding: 12px 16px;
        outline-offset: 5px;
    `;

const Answer = styled.div`
        background: hsl(0deg 0% 92.5%);
        border-radius: 0 0 4px 4px;
        padding: 12px 17px;
        font-style: italic;
    `;

export default FrequentlyAskedQuestion;