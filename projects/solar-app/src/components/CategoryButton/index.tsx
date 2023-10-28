import { Text, TouchableOpacity } from "react-native";
import { SvgProps } from "react-native-svg";
import { Gradients } from "../../Styles/StyleGuide";
import { Category } from "../../data";







type CategoryButtonProps = {
    label?: string,
    Icon?: React.FC<SvgProps>;
    color?: "blue" | "pink" | "cyan" | "yellow",
};

interface ICategoryButtonProps {
    category: Category;
}

const CategoryButton: React.FC<ICategoryButtonProps> = ({ category }) => {
    const { Icon, gradient, label } = category;
    const GradientColor = Gradients[gradient];

    return (
        <TouchableOpacity>
            <GradientColor className="justify-center items-center w-[75px] h-[75px] rounded-md">
                <Icon className="mb-2" />
                <Text className="text-[#FFAA] mt-2">{label}</Text>
            </GradientColor>
        </TouchableOpacity>
    )
}
export default CategoryButton;