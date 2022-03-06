import {render,screen} from "@testing-library/react"
import Options from "../Options";

describe("Option Component Test",()=>{
    it("5 Options to be made available",()=>{
        render(<Options/>)
        expect(screen.queryAllByTestId("options-span")).toHaveLength(5);
    })
})