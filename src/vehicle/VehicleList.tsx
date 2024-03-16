import { useContext, useEffect, useState } from "react"
import { useSelector } from "react-redux"

import { BrandContext } from "../brand/BrandContext"
import { Vehicle } from "../types"

const initialFilter = {
    model: ""
}

export function VehicleList() {
    const vehicles = useSelector((state: any) => state.vehicle)
    const [filteredVehicles, setFilteredVehicles] = useState([]);
    const brands = useContext(BrandContext);
    const [filter, setFilter] = useState({ ...initialFilter });

    const handleFilter = (type: string, value: string) => {
        setFilter({ ...filter, [type]: value })
    }
    
    useEffect(() => {
        if (filter && Object.values(filter).filter(val => val).length > 0) {
            return setFilteredVehicles(vehicles.filter((vehicle: Vehicle) => {
                // TODO: Add Other Filters
                return vehicle.model === filter.model
            }))
        }
        setFilteredVehicles(vehicles)
    }, [vehicles, filter])

    return (
        <div style={{ marginLeft: 50 }}>
            <h3>Vehicle List</h3>

            {vehicles.length === 0 && (<p>No Vehicles yet! Please add using "Add New Vehicle" option above.</p>)}
            
            {vehicles.length > 0 && (
                <>
                    <p>Filter by Model: {brands.map((brand, index) => <span key={index} style={{ cursor: "pointer", fontWeight: filter.model === brand.name ? "bold" : "", margin: 10 }} onClick={() => handleFilter("model", brand.name)}>{brand.name}</span>)}</p>
                    <p onClick={() => setFilter({ ...initialFilter })} style={{ cursor: "pointer", color: "red" }}>Clear Filters</p>
                </>
            )}
            
            {filteredVehicles.map((vehicle: Vehicle, index:any) => (
                <div key={index} style={{ border: "3px solid", width: 220, marginLeft: 20, display: "inline-block" }}>
                    <div style={{ marginLeft: 10 }}>
                        <p>Model: {vehicle.model}</p>
                        <p>Location: {vehicle.location}</p>
                        <p>Color: {vehicle.color}</p>
                        <p>No. of Owners: {vehicle.owners}</p>
                        <p>Year of Manufacturing: {vehicle.yearOfManu}</p>
                        <p>Transmission: {vehicle.transmission}</p>
                        <p>Insurance Valid Year: {vehicle.insuranceValidYear}</p>
                        <p>External Fitments: {vehicle.externalFitments}</p>
                        <p>Kilometers: {vehicle.kiloMtrs}</p>
                    </div>
                </div>
            ))}
        </div>
    )

}