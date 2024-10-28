import type { metaSchema } from 'nextra/schemas';
import type { z } from 'zod';

export default {
  index: 'Introduction',
} satisfies Record<string, z.infer<typeof metaSchema>>;
