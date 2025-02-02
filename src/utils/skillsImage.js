
import html from '../assets/skills/html.svg'
import css from '../assets/skills/css.svg'
import javascript from '../assets/skills/javascript.svg'
import react from '../assets/skills/react.svg'
import bootstrap from '../assets/skills/bootstrap.svg'
import mongoDB from '../assets/skills/mongoDB.svg'
import mysql from '../assets/skills/mysql.svg'
import tailwind from '../assets/skills/tailwind.svg'
import c from '../assets/skills/c.svg'
import cplusplus from '../assets/skills/cplusplus.svg'
import java from '../assets/skills/java.svg'
import python from '../assets/skills/python.svg'
import git from '../assets/skills/git.svg'
import materialui from '../assets/skills/materialui.svg'
import microsoftoffice from '../assets/skills/microsoftoffice.svg'
import nodejs from '../assets/skills/nodejs.svg'
import express from '../assets/skills/express.svg'
import redux from '../assets/skills/redux.svg'
import ubantu from '../assets/skills/ubantu.svg'

export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'html':
            return html;
        case 'css':
            return css;
        case 'javascript':
            return javascript;
        case 'react':
            return react;
        case 'bootstrap':
            return bootstrap;
        case 'mongodb':
            return mongoDB;
        case 'mysql':
            return mysql;
        case 'tailwind':
            return tailwind;
        case 'c':
            return c;
        case 'c++':
            return cplusplus;
        case 'java':
            return java;
        case 'python':
            return python;
        case 'git':
            return git;
        case 'materialui':
            return materialui;
        case 'microsoft office':
            return microsoftoffice;
        case 'nodejs':
            return nodejs;
        case 'express':
            return express;
        case 'redux':
            return redux;
        case 'ubuntu':
            return ubantu;
        default:
            break;
    }
}
