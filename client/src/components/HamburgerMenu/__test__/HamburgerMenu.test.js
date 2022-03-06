import {render,screen,fireEvent, cleanup} from "@testing-library/react"

import HamburgerMenu from "../HamburgerMenu";


describe("Hamburger Menu Tests",()=>{

    it("On intial Render, the hamburgerMenuContainer should not be available on screen",()=>{
        render(<HamburgerMenu/>);
        expect(screen.queryByTestId("hamburgerMenuOptions")).not.toBeTruthy()
    })

    it("On clicking the icon , the hamburger menu should be expanded",()=>{
        render(<HamburgerMenu/>);
        const hamburgerMenuEl = screen.getByTestId("hamburgerMenu");
        fireEvent.click(hamburgerMenuEl);
        expect(screen.getByTestId("hamburgerMenu")).toBeTruthy()
    })

    it("On clicking the icon again, the hamburger menu should not be visible",()=>{
        render(<HamburgerMenu/>);
        const hamburgerMenuEl = screen.getByTestId("hamburgerMenu");
        fireEvent.click(hamburgerMenuEl);
        expect(screen.getByTestId("hamburgerMenu")).toBeTruthy()
        fireEvent.click(hamburgerMenuEl);
        expect(screen.getByTestId("hamburgerMenu")).toBeTruthy()
    })
});

