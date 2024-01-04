import React from 'react';

const Introduction = () => {
    const projectDescription = "Welcome to our project! This project is all about cards, creating, editing, deleting, filtering, searching. We are excited to share our work with you.";

    const links = [
        { name: 'Assignment 1', url: 'https://github.com/fidanmardanli/WebAndMobile_Task_1.git' },
        { name: 'Assignment 2', url: 'https://github.com/fidanmardanli/WebAndMobile_Assignment2.git' },
        ,
    ];

    return (
        <div className="introduction-container">
            <h2>About the Project</h2>
            <p>{projectDescription}</p>

            <h3>Useful Links</h3>
            <table className="links-table">
                <thead>
                    <tr>
                        <th>Project Name</th>
                        <th>Link URL</th>
                    </tr>
                </thead>
                <tbody>
                    {links.map((link, index) => (
                        <tr key={index}>
                            <td>{link.name}</td>
                            <td><a href={link.url} target="_blank" rel="noopener noreferrer">{link.url}</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Introduction;
