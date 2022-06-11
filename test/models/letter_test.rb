# == Schema Information
#
# Table name: letters
#
#  id         :integer          not null, primary key
#  question   :text
#  response   :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require "test_helper"

class LetterTest < ActiveSupport::TestCase
  test "the answer is required" do
     letter = Letter.new
   end

   #  test de respuesta su campo este vacio
   def test_answer
    letter =  letters(:letter1)
    #debugger
    # valida que el campo sea nulo
    letter.response = nil
    #verificamos con este metodo que el campo response no sea valido dentro de la base de datos
   #assert_not( test, [msg] )	Asegura que testes falso.
    assert_not letter.valid?
   end

   # test de respuesta sea un campo requerido
    def test_answer_is_required
      letter = Letter.new
      assert_not letter.valid?

      #valida que el campo response no sea nulo
      letter.response = "HERENCIA"
      #Asegura que tests sea verdadero.
      assert letter.valid?
   end

   # test de respuesta en la tabla letter
   def test_answer_is_question
      letter = letters(:letter1)
      assert_equal "HERENCIA", letter.response
   end

end
