class LettersController < ApplicationController

    def index
        @letters = Letter.all
        wordSearch = GenerateLetter.new
        @matriz = wordSearch.generate
    end

    def new
        @letter = Letter.new
    end

    def create
         @letter = Letter.create letter_params
           redirect_to letters_path
    end

    private
    def letter_params
        params.require(:letter).permit(:question, :response)
    end
end
