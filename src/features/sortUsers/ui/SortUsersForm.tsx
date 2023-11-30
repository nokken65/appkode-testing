import { submit, useForm, useFormStore } from '@modular-forms/react'

import { SORT } from '@/shared/constants'

import { Sort } from '../model/models'

type SortUsersForm = { sort: { ids: Sort[] } }

export const SortUsersForm = () => {
  const [form, { Field, Form, FieldArray }] = useForm<SortUsersForm>({
    initialValues: {
      sort: { ids: ['byAlphabet', 'byBirthday'] }
    }
  })

  return (
    <Form
      onChange={() => submit(form)}
      onSubmit={(v) => {
        console.log(v)
      }}
    >
      <FieldArray name={'sort.ids'}>
        {(fieldArray) =>
          fieldArray.items.value.map((item, index) => (
            <Field
              name={`sort.ids.${index}`}
              key={item}
            >
              {(field, props) => (
                <label>
                  <input
                    {...props}
                    name={fieldArray.name}
                    type="radio"
                    value={field.value.value}
                    defaultChecked={SORT.IDS[0] === field.value.value}
                  />
                  {SORT.LABELS[index]}
                </label>
              )}
            </Field>
          ))
        }
      </FieldArray>
    </Form>
  )
}
