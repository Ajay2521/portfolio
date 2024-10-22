import React from 'react';
import { LuBadgeCheck } from "react-icons/lu";

const ToolsAndTechnology = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Tools And Technology</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <LuBadgeCheck className="skills__icon" />
                        <div>
                            <h3 className="skills__name">Docker</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <LuBadgeCheck className="skills__icon" />
                        <div>
                            <h3 className="skills__name">Serverless</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <LuBadgeCheck className="skills__icon" />
                        <div>
                            <h3 className="skills__name">Swagger</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <LuBadgeCheck className="skills__icon" />
                        <div>
                            <h3 className="skills__name">Postman</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <LuBadgeCheck className="skills__icon" />
                        <div>
                            <h3 className="skills__name">Datadog</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <LuBadgeCheck className="skills__icon" />
                        <div>
                            <h3 className="skills__name">Karate</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ToolsAndTechnology;