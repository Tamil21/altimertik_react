import { useContext, useState } from "react";
import { useDispatch } from "react-redux";

import { BrandContext } from "../brand/BrandContext";
import { create } from "../redux/reducers";
import { Brand, Vehicle } from "../types";

const initialState: Vehicle = {
    model: "",
    location: "Chennai",
    color: "Blue",
    owners: "5",
    yearOfManu: "2020",
    transmission: "Petrol",
    insuranceValidYear: "2024",
    externalFitments: "Sample",
    kiloMtrs: "2213",
    photo: ""
};

export function VehicleAdd() {
    const brands: Brand[] = useContext(BrandContext);
    const dispatch = useDispatch();
    const [input, setInput] = useState({ ...initialState });
    const [savedData, setSavedData] = useState({
        model: ""
    });
    
    // TODO: Validation
    const handleChange = (e: any) => setInput({ ...input, [e.target.name] : e.target.value });

    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(create(input));
        setSavedData({ ...input });
        setInput({ ...initialState });
    }

    return (
        <div style={{ marginLeft: 50 }}>
            <h3>Add Vehicle</h3>

            {/* TODO: Render Image instead of Div */}
            <h5>Click on a model to proceed</h5>
            {brands.map((brand: Brand) => (
                <div key={brand.name.toLowerCase()} onClick={() => {
                    setInput({ ...input, model: brand.name });
                    setSavedData({ model: "" })
                }} style={{ display: "inline-block", backgroundColor: input.model === brand.name ? "red" : "yellow", cursor:"pointer", marginRight: 20, width: 100, height: 70, border: "solid 2px", textAlign:"center" }}><h4>{brand.name}</h4></div>
            ))}

            <br /><br />

            {input.model && (
                <form onSubmit={handleSubmit}>
                    <span>Model: </span>
                    <input type="text" disabled value={input.model} onChange={handleChange} />
                    <br/><br/>
                    <span>Location: </span>
                    <input type="text" name="location" placeholder="Enter location" value={input.location} onChange={handleChange} />
                    <br/><br/>
                    <span>Color: </span>
                    <input type="text" name="color" placeholder="Enter color" value={input.color} onChange={handleChange} />
                    <br/><br/>
                    <span>No. of Owners: </span>
                    <input type="number" name="owners" placeholder="Enter owners" value={input.owners} onChange={handleChange} />
                    <br/><br/>
                    <span>Year of Manufacturing: </span>
                    <input type="year" name="yearOfManu" placeholder="Enter year of manufacture" value={input.yearOfManu} onChange={handleChange} />
                    <br/><br/>
                    <span>Transmission: </span>
                    <input type="text" name="transmission" placeholder="Enter transmission" value={input.transmission} onChange={handleChange} />
                    <br/><br/>
                    <span>Insurance Valid Year: </span>
                    <input type="number" name="insuranceValidYear" placeholder="Enter insurance valid upto" value={input.insuranceValidYear} onChange={handleChange} />
                    <br/><br/>
                    <span>External Fitments: </span>
                    <input type="text" name="externalFitmentsmodel" placeholder="Enter external fitments" value={input.externalFitments} onChange={handleChange} />
                    <br/><br/>
                    <span>Kilometers: </span>
                    <input type="number" name="kiloMtrs" placeholder="Enter kms" value={input.kiloMtrs} onChange={handleChange} />
                    <br/><br/>
                    <span>Photo: </span>
                    <input type="file" name="photo" value={input.photo} onChange={handleChange} />
                    <br /><br/>
                    <button type="submit">Submit</button>
                </form>
            )}

            {savedData.model && (
                <div>
                    <h4>Vehicle Saved!</h4>
                    <span>
                        {JSON.stringify(savedData)}
                    </span>
                </div>
            )}
        </div>
    )
}