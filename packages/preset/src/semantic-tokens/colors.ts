import { defineSemanticTokens } from "@pandacss/dev";

export const semanticColors = defineSemanticTokens.colors({
  bg: {
    canvas: {
      value: {
        base: "{colors.gray.50}",
        _light: "{colors.gray.50}",
        _dark: "{colors.gray.950}",
        _ocean: "{colors.cyan.950}"
      },
      description: "Default page canvas background surface"
    },
    surface: {
      value: {
        base: "{colors.white}",
        _light: "{colors.white}",
        _dark: "{colors.gray.900}",
        _ocean: "{colors.cyan.900}"
      },
      description: "Elevated card and container surface"
    },
    subtle: {
      value: {
        base: "{colors.gray.100}",
        _light: "{colors.gray.100}",
        _dark: "{colors.gray.800}",
        _ocean: "{colors.cyan.800}"
      },
      description: "Subtle secondary container background"
    },
    muted: {
      value: {
        base: "{colors.gray.200}",
        _light: "{colors.gray.200}",
        _dark: "{colors.gray.700}",
        _ocean: "{colors.cyan.700}"
      },
      description: "Muted interactive or well surface"
    },
    inverse: {
      value: {
        base: "{colors.gray.900}",
        _light: "{colors.gray.900}",
        _dark: "{colors.gray.50}",
        _ocean: "{colors.cyan.50}"
      },
      description: "High-contrast inverse surface"
    }
  },
  text: {
    DEFAULT: {
      value: {
        base: "{colors.gray.900}",
        _light: "{colors.gray.900}",
        _dark: "{colors.gray.50}",
        _ocean: "{colors.cyan.50}"
      },
      description: "Primary body and heading text color"
    },
    muted: {
      value: {
        base: "{colors.gray.600}",
        _light: "{colors.gray.600}",
        _dark: "{colors.gray.400}",
        _ocean: "{colors.cyan.200}"
      },
      description: "Secondary supporting text color"
    },
    subtle: {
      value: {
        base: "{colors.gray.400}",
        _light: "{colors.gray.400}",
        _dark: "{colors.gray.500}",
        _ocean: "{colors.cyan.400}"
      },
      description: "Placeholder and de-emphasized text color"
    },
    inverse: {
      value: {
        base: "{colors.white}",
        _light: "{colors.white}",
        _dark: "{colors.gray.900}",
        _ocean: "{colors.cyan.950}"
      },
      description: "Foreground text on inverse surfaces"
    }
  },
  primary: {
    DEFAULT: {
      value: {
        base: "{colors.blue.600}",
        _light: "{colors.blue.600}",
        _dark: "{colors.blue.500}",
        _ocean: "{colors.cyan.500}"
      },
      description: "Default primary brand interactive color"
    },
    hover: {
      value: {
        base: "{colors.blue.700}",
        _light: "{colors.blue.700}",
        _dark: "{colors.blue.400}",
        _ocean: "{colors.cyan.400}"
      },
      description: "Hovered primary brand interactive color"
    },
    active: {
      value: {
        base: "{colors.blue.800}",
        _light: "{colors.blue.800}",
        _dark: "{colors.blue.600}",
        _ocean: "{colors.cyan.600}"
      },
      description: "Pressed primary brand interactive color"
    },
    subtle: {
      value: {
        base: "{colors.blue.50}",
        _light: "{colors.blue.50}",
        _dark: "{colors.blue.950}",
        _ocean: "{colors.cyan.900}"
      },
      description: "Soft primary brand tint surface"
    }
  },
  onPrimary: {
    DEFAULT: {
      value: {
        base: "{colors.white}",
        _light: "{colors.white}",
        _dark: "{colors.white}",
        _ocean: "{colors.cyan.950}"
      },
      description: "Default text and icon color on primary backgrounds"
    }
  },
  secondary: {
    DEFAULT: {
      value: {
        base: "{colors.gray.100}",
        _light: "{colors.gray.100}",
        _dark: "{colors.gray.800}",
        _ocean: "{colors.cyan.800}"
      },
      description: "Default secondary interactive surface"
    },
    hover: {
      value: {
        base: "{colors.gray.200}",
        _light: "{colors.gray.200}",
        _dark: "{colors.gray.700}",
        _ocean: "{colors.cyan.700}"
      },
      description: "Hovered secondary interactive surface"
    },
    active: {
      value: {
        base: "{colors.gray.300}",
        _light: "{colors.gray.300}",
        _dark: "{colors.gray.600}",
        _ocean: "{colors.cyan.600}"
      },
      description: "Pressed secondary interactive surface"
    }
  },
  onSecondary: {
    DEFAULT: {
      value: {
        base: "{colors.gray.900}",
        _light: "{colors.gray.900}",
        _dark: "{colors.gray.50}",
        _ocean: "{colors.cyan.50}"
      },
      description: "Default text and icon color on secondary backgrounds"
    }
  },
  border: {
    DEFAULT: {
      value: {
        base: "{colors.gray.200}",
        _light: "{colors.gray.200}",
        _dark: "{colors.gray.800}",
        _ocean: "{colors.cyan.800}"
      },
      description: "Default container and control border color"
    },
    muted: {
      value: {
        base: "{colors.gray.100}",
        _light: "{colors.gray.100}",
        _dark: "{colors.gray.900}",
        _ocean: "{colors.cyan.900}"
      },
      description: "Subtle divider border color"
    },
    strong: {
      value: {
        base: "{colors.gray.300}",
        _light: "{colors.gray.300}",
        _dark: "{colors.gray.700}",
        _ocean: "{colors.cyan.700}"
      },
      description: "Emphasized input and interactive border color"
    },
    focus: {
      value: {
        base: "{colors.blue.600}",
        _light: "{colors.blue.600}",
        _dark: "{colors.blue.400}",
        _ocean: "{colors.cyan.400}"
      },
      description: "Keyboard focus ring indicator color"
    }
  },
  success: {
    DEFAULT: {
      value: {
        base: "{colors.green.600}",
        _light: "{colors.green.600}",
        _dark: "{colors.green.500}",
        _ocean: "{colors.green.400}"
      },
      description: "Primary success status color"
    },
    subtle: {
      value: {
        base: "{colors.green.50}",
        _light: "{colors.green.50}",
        _dark: "{colors.green.950}",
        _ocean: "{colors.green.950}"
      },
      description: "Subtle success alert surface"
    },
    text: {
      value: {
        base: "{colors.green.700}",
        _light: "{colors.green.700}",
        _dark: "{colors.green.300}",
        _ocean: "{colors.green.300}"
      },
      description: "Success status foreground text"
    },
    border: {
      value: {
        base: "{colors.green.200}",
        _light: "{colors.green.200}",
        _dark: "{colors.green.800}",
        _ocean: "{colors.green.800}"
      },
      description: "Success status border color"
    }
  },
  warning: {
    DEFAULT: {
      value: {
        base: "{colors.amber.500}",
        _light: "{colors.amber.500}",
        _dark: "{colors.amber.400}",
        _ocean: "{colors.amber.400}"
      },
      description: "Primary warning status color"
    },
    subtle: {
      value: {
        base: "{colors.amber.50}",
        _light: "{colors.amber.50}",
        _dark: "{colors.amber.950}",
        _ocean: "{colors.amber.950}"
      },
      description: "Subtle warning alert surface"
    },
    text: {
      value: {
        base: "{colors.amber.800}",
        _light: "{colors.amber.800}",
        _dark: "{colors.amber.300}",
        _ocean: "{colors.amber.300}"
      },
      description: "Warning status foreground text"
    },
    border: {
      value: {
        base: "{colors.amber.200}",
        _light: "{colors.amber.200}",
        _dark: "{colors.amber.800}",
        _ocean: "{colors.amber.800}"
      },
      description: "Warning status border color"
    }
  },
  danger: {
    DEFAULT: {
      value: {
        base: "{colors.red.600}",
        _light: "{colors.red.600}",
        _dark: "{colors.red.500}",
        _ocean: "{colors.red.500}"
      },
      description: "Primary danger and error color"
    },
    hover: {
      value: {
        base: "{colors.red.700}",
        _light: "{colors.red.700}",
        _dark: "{colors.red.400}",
        _ocean: "{colors.red.400}"
      },
      description: "Hovered destructive interactive color"
    },
    subtle: {
      value: {
        base: "{colors.red.50}",
        _light: "{colors.red.50}",
        _dark: "{colors.red.950}",
        _ocean: "{colors.red.950}"
      },
      description: "Subtle danger alert surface"
    },
    text: {
      value: {
        base: "{colors.red.700}",
        _light: "{colors.red.700}",
        _dark: "{colors.red.300}",
        _ocean: "{colors.red.300}"
      },
      description: "Danger status foreground text"
    },
    border: {
      value: {
        base: "{colors.red.200}",
        _light: "{colors.red.200}",
        _dark: "{colors.red.800}",
        _ocean: "{colors.red.800}"
      },
      description: "Danger status border color"
    }
  },
  onDanger: {
    DEFAULT: {
      value: {
        base: "{colors.white}",
        _light: "{colors.white}",
        _dark: "{colors.white}",
        _ocean: "{colors.white}"
      },
      description: "Default text and icon color on danger backgrounds"
    }
  }
});
