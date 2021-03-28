from django.test import TestCase
from .models import Todo

# Create your tests here.


class TodoModelTest(TestCase):

  @classmethod
  def setUpTestData(cls):
    Todo.objects.create(title='first todo', body='a body here')

  def test_body_content(self):
    todo = Todo.objects.get(id=1)
    expected_object_name = f'{todo.body}'
    self.assertEqual(expected_object_name, 'a body here')