function hasTypeOfOperator(node) {
    const parent = node.parent;

    return parent.type === 'UnaryExpression' && parent.operator === 'typeof';
}

function isTypeRef(node) {
    const parent = node.parent;

    return parent.type === 'TSTypeReference' ||
        parent.type === 'TSInterfaceHeritage';
}

module.exports = {
    meta: {
        type: 'problem',
        docs: {
            description: 'disallow the use of undeclared variables unless mentioned in `/*global */` comments',
            category: 'Variables',
            recommended: true,
            url: 'https://eslint.org/docs/rules/no-undef',
        },
        schema: [
            {
                type: 'object',
                properties: {
                    typeof: {
                        type: 'boolean',
                        default: false,
                    },
                },
                additionalProperties: false,
            }
        ],
        messages: {
            undef: '\'{{name}}\' is not defined.',
        },
    },

    create(context) {
        const options = context.options[0];
        const considerTypeOf = options && options.typeof === true || false;

        return {
            'Program:exit'(/* node */) {
                const globalScope = context.getScope();
                
                globalScope.through.forEach((ref) => {
                    const identifier = ref.identifier;

                    if (!considerTypeOf && hasTypeOfOperator(identifier)) {
                        return;
                    }

                    if (isTypeRef(identifier)) {
                        return;
                    }

                    context.report({
                        node: identifier,
                        messageId: 'undef',
                        data: identifier
                    });
                });
            }
        };
    }
};
