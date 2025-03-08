import { useEffect, useState } from "react"
import { fetchAbilityDescription } from "../utils/api";

const AbilityModal = ({abilityName, onClose}) => {
    const [description, setDescription] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=> {
        setIsLoading(true);
        setError(null);

        fetchAbilityDescription(abilityName)
        .then((data) => {
            setDescription(data);
            setIsLoading(false);
        })
        .catch((error) => {
            console.error('Error:', error);
            setError("Failed to fetch ability description");
            setIsLoading(false);
        });
    },[abilityName])

    return (
        <div className="ability-modal" onClick={onClose}>
            <div className="ability-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>x</button>
                {isLoading ? (
                    <p>Loading..</p>
                ) : error ? (
                    <p>{error}</p>
                ) : (
                    <p>{description}</p>
                )}
            </div>
        </div>
    )
}

export default AbilityModal;