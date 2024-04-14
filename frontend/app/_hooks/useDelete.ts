const { mutate: mutateDelete } = useMutation({
  mutationFn: ({ id }) => {
    return deleteCategory({ id });
  },
  onSuccess: (data) => {

  },
  onError: (error) => {
  },
});
