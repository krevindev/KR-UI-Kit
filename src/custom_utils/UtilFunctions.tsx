const moduleClasses = (passedClasses: string, styles: any) => {
    const classesArr = passedClasses.split(' ');
    return classesArr.map((arrClass: any) => styles[arrClass] + ' ').join('');
}

export { moduleClasses };