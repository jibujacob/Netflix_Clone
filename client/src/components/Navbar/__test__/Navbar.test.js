import {render,screen,fireEvent} from "@testing-library/react";
import Navbar from "../Navbar";
import useDeviceDetect from "../../../hooks/useDeviceDetect"

describe("Navbar Component Tests",()=>{
    it("On initial Render , the scrolled class is not applied",()=>{
        render(<Navbar/>)
        expect(screen.getByTestId("app-header").classList.contains("scrolled")).toBe(false)
    })

    it("On window scroll the scrolled class should be applied",async ()=>{
        render(<Navbar/>)
        expect(screen.getByTestId("app-header").classList.contains("scrolled")).toBe(false)
        await fireEvent.scroll(window,{target:{scrollY:10}})
        expect(screen.getByTestId("app-header").classList.contains("scrolled")).toBe(true)
    })

})