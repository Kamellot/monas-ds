import { defineSemanticTokens } from "@pandacss/dev";
import type { MonasTheme } from "./index.js";

export const oceanColors = defineSemanticTokens.colors({
  bg: {
    canvas: {
      value: {
        base: "{colors.cyan.50}",
        _light: "{colors.cyan.50}",
        _dark: "{colors.cyan.950}"
      },
      description: "Ocean page canvas background surface"
    },
    surface: {
      value: {
        base: "{colors.white}",
        _light: "{colors.white}",
        _dark: "{colors.cyan.900}"
      },
      description: "Ocean elevated card and container surface"
    },
    subtle: {
      value: {
        base: "{colors.cyan.100}",
        _light: "{colors.cyan.100}",
        _dark: "{colors.cyan.800}"
      },
      description: "Ocean subtle secondary container background"
    },
    muted: {
      value: {
        base: "{colors.cyan.200}",
        _light: "{colors.cyan.200}",
        _dark: "{colors.cyan.700}"
      },
      description: "Ocean muted interactive or well surface"
    },
    inverse: {
      value: {
        base: "{colors.cyan.950}",
        _light: "{colors.cyan.950}",
        _dark: "{colors.cyan.50}"
      },
      description: "Ocean high-contrast inverse surface"
    }
  },
  text: {
    DEFAULT: {
      value: {
        base: "{colors.cyan.950}",
        _light: "{colors.cyan.950}",
        _dark: "{colors.cyan.50}"
      },
      description: "Ocean primary body and heading text color"
    },
    muted: {
      value: {
        base: "{colors.cyan.700}",
        _light: "{colors.cyan.700}",
        _dark: "{colors.cyan.200}"
      },
      description: "Ocean secondary supporting text color"
    },
    subtle: {
      value: {
        base: "{colors.cyan.500}",
        _light: "{colors.cyan.500}",
        _dark: "{colors.cyan.400}"
      },
      description: "Ocean placeholder and de-emphasized text color"
    },
    inverse: {
      value: {
        base: "{colors.white}",
        _light: "{colors.white}",
        _dark: "{colors.cyan.950}"
      },
      description: "Ocean foreground text on inverse surfaces"
    }
  },
  primary: {
    DEFAULT: {
      value: {
        base: "{colors.cyan.600}",
        _light: "{colors.cyan.600}",
        _dark: "{colors.cyan.500}"
      },
      description: "Ocean primary brand interactive color"
    },
    hover: {
      value: {
        base: "{colors.cyan.700}",
        _light: "{colors.cyan.700}",
        _dark: "{colors.cyan.400}"
      },
      description: "Ocean hovered primary interactive color"
    },
    active: {
      value: {
        base: "{colors.cyan.800}",
        _light: "{colors.cyan.800}",
        _dark: "{colors.cyan.600}"
      },
      description: "Ocean pressed primary interactive color"
    },
    subtle: {
      value: {
        base: "{colors.cyan.100}",
        _light: "{colors.cyan.100}",
        _dark: "{colors.cyan.900}"
      },
      description: "Ocean soft primary tint surface"
    }
  },
  onPrimary: {
    DEFAULT: {
      value: {
        base: "{colors.white}",
        _light: "{colors.white}",
        _dark: "{colors.cyan.950}"
      },
      description: "Ocean text and icon color on primary backgrounds"
    }
  },
  secondary: {
    DEFAULT: {
      value: {
        base: "{colors.cyan.100}",
        _light: "{colors.cyan.100}",
        _dark: "{colors.cyan.800}"
      },
      description: "Ocean secondary interactive surface"
    },
    hover: {
      value: {
        base: "{colors.cyan.200}",
        _light: "{colors.cyan.200}",
        _dark: "{colors.cyan.700}"
      },
      description: "Ocean hovered secondary interactive surface"
    },
    active: {
      value: {
        base: "{colors.cyan.300}",
        _light: "{colors.cyan.300}",
        _dark: "{colors.cyan.600}"
      },
      description: "Ocean pressed secondary interactive surface"
    }
  },
  onSecondary: {
    DEFAULT: {
      value: {
        base: "{colors.cyan.950}",
        _light: "{colors.cyan.950}",
        _dark: "{colors.cyan.50}"
      },
      description: "Ocean text and icon color on secondary backgrounds"
    }
  },
  border: {
    DEFAULT: {
      value: {
        base: "{colors.cyan.200}",
        _light: "{colors.cyan.200}",
        _dark: "{colors.cyan.800}"
      },
      description: "Ocean default container and control border color"
    },
    muted: {
      value: {
        base: "{colors.cyan.100}",
        _light: "{colors.cyan.100}",
        _dark: "{colors.cyan.900}"
      },
      description: "Ocean subtle divider border color"
    },
    strong: {
      value: {
        base: "{colors.cyan.300}",
        _light: "{colors.cyan.300}",
        _dark: "{colors.cyan.700}"
      },
      description: "Ocean emphasized input and interactive border color"
    },
    focus: {
      value: {
        base: "{colors.cyan.600}",
        _light: "{colors.cyan.600}",
        _dark: "{colors.cyan.400}"
      },
      description: "Ocean keyboard focus ring indicator color"
    }
  },
  success: {
    DEFAULT: {
      value: {
        base: "{colors.green.600}",
        _light: "{colors.green.600}",
        _dark: "{colors.green.400}"
      },
      description: "Ocean primary success status color"
    },
    subtle: {
      value: {
        base: "{colors.green.50}",
        _light: "{colors.green.50}",
        _dark: "{colors.green.950}"
      },
      description: "Ocean subtle success alert surface"
    },
    text: {
      value: {
        base: "{colors.green.700}",
        _light: "{colors.green.700}",
        _dark: "{colors.green.300}"
      },
      description: "Ocean success status foreground text"
    },
    border: {
      value: {
        base: "{colors.green.200}",
        _light: "{colors.green.200}",
        _dark: "{colors.green.800}"
      },
      description: "Ocean success status border color"
    }
  },
  warning: {
    DEFAULT: {
      value: {
        base: "{colors.amber.500}",
        _light: "{colors.amber.500}",
        _dark: "{colors.amber.400}"
      },
      description: "Ocean primary warning status color"
    },
    subtle: {
      value: {
        base: "{colors.amber.50}",
        _light: "{colors.amber.50}",
        _dark: "{colors.amber.950}"
      },
      description: "Ocean subtle warning alert surface"
    },
    text: {
      value: {
        base: "{colors.amber.800}",
        _light: "{colors.amber.800}",
        _dark: "{colors.amber.300}"
      },
      description: "Ocean warning status foreground text"
    },
    border: {
      value: {
        base: "{colors.amber.200}",
        _light: "{colors.amber.200}",
        _dark: "{colors.amber.800}"
      },
      description: "Ocean warning status border color"
    }
  },
  danger: {
    DEFAULT: {
      value: {
        base: "{colors.red.600}",
        _light: "{colors.red.600}",
        _dark: "{colors.red.500}"
      },
      description: "Ocean primary danger and error color"
    },
    hover: {
      value: {
        base: "{colors.red.700}",
        _light: "{colors.red.700}",
        _dark: "{colors.red.400}"
      },
      description: "Ocean hovered destructive interactive color"
    },
    subtle: {
      value: {
        base: "{colors.red.50}",
        _light: "{colors.red.50}",
        _dark: "{colors.red.950}"
      },
      description: "Ocean subtle danger alert surface"
    },
    text: {
      value: {
        base: "{colors.red.700}",
        _light: "{colors.red.700}",
        _dark: "{colors.red.300}"
      },
      description: "Ocean danger status foreground text"
    },
    border: {
      value: {
        base: "{colors.red.200}",
        _light: "{colors.red.200}",
        _dark: "{colors.red.800}"
      },
      description: "Ocean danger status border color"
    }
  },
  onDanger: {
    DEFAULT: {
      value: {
        base: "{colors.white}",
        _light: "{colors.white}",
        _dark: "{colors.white}"
      },
      description: "Ocean text and icon color on danger backgrounds"
    }
  }
});

export const oceanTheme: MonasTheme = {
  name: "ocean",
  colors: oceanColors
};
