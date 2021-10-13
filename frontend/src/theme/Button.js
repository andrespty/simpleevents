import { darken } from "@chakra-ui/theme-tools"

export const Button = {
    baseStyle: {

    },
    // Styles for the size variations
    sizes: {},
    // Styles for the visual style variations
    variants: {
        navbar: {
            bg: 'primary.300',
            color: 'white',
            _hover: {
                bg: darken('primary.300',10)
            }
        }
    },
    // The default `size` or `variant` values
    defaultProps: {},
}