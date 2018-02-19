import * as React from 'react';

interface ProjectProps {
    card: timelineItem,
    index: number,
}

export default function Project(props: ProjectProps) {
    const { card, index } = props;

    return (
        <div className={`demo-card demo-card--step${index + 1}`}   >
            <a href={card.link}>
                <div className="head">
                    <div className="number-box">
                        {card.years}
                    </div>
                    <h2>{card.name} <span>{card.title}</span> </h2>
                </div>

                <div className="body">
                    <img src={card.picture} alt="Graphic" ></img>
                </div>

                <div className="description">{card.description}</div>
            </a>
        </div>
    );
}
