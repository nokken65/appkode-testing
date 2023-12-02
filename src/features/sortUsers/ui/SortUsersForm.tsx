import { submit, useForm } from '@modular-forms/react'
import { useUnit } from 'effector-react'

import { SORT } from '@/shared/constants'

import { sortUsers } from '../model'
import { SortUsersFormFieldValues } from '../model/models'
import { SortUserRadioField } from './SortUserRadioField'

export const SortUsersForm = () => {
  const setSort = useUnit(sortUsers.settedSort)
  const [form, { Field, Form }] = useForm<SortUsersFormFieldValues>({
    initialValues: {
      sort: 'byAlphabet'
    }
  })

  return (
    <Form
      onChange={() => submit(form)}
      onSubmit={(v) => setSort(v.sort)}
    >
      {SORT.IDS.map((id, index) => (
        <Field
          name="sort"
          key={id}
          type="string"
        >
          {(field, props) => (
            <SortUserRadioField
              {...props}
              checked={!!field.value.value?.includes(id)}
              value={id}
              error={field.error}
              label={SORT.LABELS[index]}
            />
          )}
        </Field>
      ))}
    </Form>
  )
}
