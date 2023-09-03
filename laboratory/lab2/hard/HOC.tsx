import { useState } from "react"






type AdditionalProps = {
    test?: string
}
/**
 * HOC will accept a JSX element and performs business logic then return back the updated component.
 * Increasing the reusability.
 * @param OriginalComponent is the original component being sent to the HOC
 */

export default function HOC<T>(WrappedComponent: React.ComponentType<T>): React.FC<T & AdditionalProps> {

    // Business logic here
    const UpdatedComponent: React.FC<T & AdditionalProps> = (props) => {
        const [counter, setCounter] = useState<number>(0)
        
        const handlePress = () => {
            setCounter(counter + 1)
        }
        // Update the original component
        return <WrappedComponent {...props} handlePress={handlePress} counter={counter} />
    }
    
    // Then return back the new updated component
    return UpdatedComponent;
}