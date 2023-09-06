/* eslint-disable react/prop-types */
import { useState } from "react";
import "./style.scss";

function SwitchTabs({ data, onTabChange }) {
    //selectedTab accepts the index of the button tab.
    const [selectedTab, setSelectedTab] = useState(0);
    //left is used to create the animation of the changing buttons.
    const [left, setLeft] = useState(0);

    const activeTab = (tab, index) => {
        setLeft(index * 100);
        setTimeout(() => {
            setSelectedTab(index);
        }, 300);

        onTabChange(tab, index);
    };

    return (
        <div className="switchingTabs">
            <div className="tabItems">
                {data.map((tab, index) => (
                    <span
                        key={index}
                        className={`tabItem ${
                            selectedTab === index ? "active" : ""
                        }`}
                        onClick={() => activeTab(tab, index)}
                    >
                        {tab}
                    </span>
                ))}
                <span className="movingBg" style={{ left }}/>
                {/* Here ⁡⁢⁣⁣style = {{left}}⁡ means that the value of the style property left will be set to the value of the tab that has been selected, i.e. the ⁡⁢⁣⁣left: (index*100)px⁡. So thus the background changes */}
            </div>
        </div>
    );
}

export default SwitchTabs;
